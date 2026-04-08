import { lazy, Suspense } from 'react';
import SearchPanel from './components/SearchPanel';
import UserGrid from './components/UserGrid';
import Pagination from './components/Pagination';
import { useSearchUsers } from './hooks/useSearchUsers';
import './App.css';

const ErrorMessage = lazy(() => import('./components/ErrorMessage'));

function App() {
    const {
        users,
        loading,
        error,
        totalPages,
        currentPage,
        field,
        query,
        setPage,
        setField,
        setQuery,
    } = useSearchUsers();

    return (
        <main className='app-main'>
            <SearchPanel
                field={field}
                query={query}
                setField={setField}
                setQuery={setQuery}
            />
            {error ? (
                <Suspense fallback={<div>Loading error...</div>}>
                    <ErrorMessage message={error} />
                </Suspense>
            ) : (
                <section className={'results-section'} aria-label='Users data'>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        disabled={loading}
                        onPageChange={setPage}
                    />
                    <UserGrid
                        users={users}
                        loading={loading}
                    />
                </section>
            )}
        </main>
    );
}

export default App;
