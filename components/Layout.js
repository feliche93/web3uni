import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="h-full bg-gray-100">
        <div className="min-h-full">
          <Navigation/>
          <main className="py-10">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}