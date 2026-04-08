import { useState, useEffect, useCallback, useRef } from 'react';
import useDebounceValue from './useDebounceValue';
import type { User } from '../types/user';
import { ENTRY_LIMIT } from '../constants';

interface SearchState {
    users: User[];
    totalCount: number;
    loading: boolean;
    error: string | null;
}

export function useSearchUsers() {
    const [state, setState] = useState<SearchState>({
        users: [],
        totalCount: 0,
        loading: false,
        error: null,
    });
    const [field, setField] = useState<string>('name');
    const [query, setQuery] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const debouncedQuery = useDebounceValue(query);
    const prevFieldRef = useRef<string>(field);
    const abortControllerRef = useRef<AbortController | null>(null);

    const fetchUsers = useCallback(async () => {
        const trimmedQuery = debouncedQuery.trim();
        if (trimmedQuery === '' && prevFieldRef.current !== field) {
            prevFieldRef.current = field;
            return;
        }
        prevFieldRef.current = field;

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        const controller = new AbortController();
        abortControllerRef.current = controller;
        const signal = controller.signal;

        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const url = trimmedQuery.length
                ? `https://jsonplaceholder.typicode.com/users?${field}_like=${encodeURIComponent(trimmedQuery)}&_page=${page}&_limit=${ENTRY_LIMIT}`
                : `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${ENTRY_LIMIT}`;

            const response = await fetch(url, { signal });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const totalCountHeader = response.headers.get('X-Total-Count');
            const totalCount = totalCountHeader ? Number.parseInt(totalCountHeader, 10) : 0;
            const usersData: User[] = await response.json();

            setState({
                users: usersData,
                totalCount,
                loading: false,
                error: null,
            });
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
                return;
            }
            setState(prev => ({
                ...prev,
                loading: false,
                error: err instanceof Error ? err.message : 'Failed to fetch data',
            }));
        }
    }, [debouncedQuery, field, page]);

    useEffect(() => {
        fetchUsers();

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [fetchUsers]);

    useEffect(() => {
        setPage(1);
    }, [field, debouncedQuery]);

    const totalPages = Math.ceil(state.totalCount / ENTRY_LIMIT);

    return {
        users: state.users,
        loading: state.loading,
        error: state.error,
        totalPages,
        currentPage: page,
        setPage,
        field,
        setField,
        query,
        setQuery,
    };
}
