import { useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError() as any
  console.error(error)

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-medium mb-2'>OOPS!</h1>
      <p className='mb-6 text-md text-slate-600/60 dark:text-slate-200/60'>Sorry, an unexpected error has occurred.</p>
      <p className='
        px-4 py-2
        border rounded-md
        border-orange-600/60 bg-orange-700/20 text-orange-600
      '>
        <span>Error: </span>
        <span>{error?.statusText || error?.message}</span>
      </p>
    </div>
  )
}
