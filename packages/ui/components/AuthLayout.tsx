export function AuthLayout({ children }: any) {
  return (
    <>
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+1.5rem)] top-[calc(100vh-13rem)] aspect-[1155/678] w-[18.0625rem] -translate-x-1/2 bg-gradient-to-tr from-[#004bd9] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] sm:top-[calc(100%-30rem)] md:left-[calc(50%+18rem)] md:w-[54.125rem] lg:left-[calc(50%+36rem)] lg:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
        <div
          className="absolute top-0 left-0 aspect-[1155/678] w-[18.0625rem] bg-gradient-to-tr from-[#004bd9] to-[#9089fc] opacity-10 md:w-[36.125rem]"
          style={{
            clipPath:
              'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 61.6%, 2.5% 26.9%, 14.5% 0.1%, 19.3% 2%, 27.5% 32.5%, 39.8% 62.4%, 47.6% 68.1%, 52.5% 58.3%, 54.8% 34.5%, 72.5% 76.7%, 99.9% 64.9%, 82.1% 100%, 72.4% 76.8%, 23.9% 97.7%, 25.9% 44.1%)',
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-[6rem] bg-gradient-to-tr from-[#004bd9] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(0% 100%, 100% 100%, 100% 0%, 80% 50%, 60% 0%, 40% 50%, 20% 0%, 0% 0%)',
          }}
        />
      </div>
      <div
        className="absolute sm:hidden inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+1.5rem)] top-[calc(100vh-13rem)] aspect-[1155/678] w-[18.0625rem] -translate-x-1/2 bg-gradient-to-tr from-[#004bd9] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] sm:top-[calc(100%-30rem)] md:left-[calc(50%+18rem)] md:w-[54.125rem] lg:left-[calc(50%+36rem)] lg:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
        <div
          className="absolute top-0 left-0 aspect-[1155/678] w-[18.0625rem] bg-gradient-to-tr from-[#004bd9] to-[#9089fc] opacity-30 md:w-[36.125rem]"
          style={{
            clipPath:
              'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 61.6%, 2.5% 26.9%, 14.5% 0.1%, 19.3% 2%, 27.5% 32.5%, 39.8% 62.4%, 47.6% 68.1%, 52.5% 58.3%, 54.8% 34.5%, 72.5% 76.7%, 99.9% 64.9%, 82.1% 100%, 72.4% 76.8%, 23.9% 97.7%, 25.9% 44.1%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[6rem] bg-gradient-to-tr from-[#004bd9] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(0% 100%, 100% 100%, 100% 0%, 80% 50%, 60% 0%, 40% 50%, 20% 0%, 0% 0%)',
          }}
        />
      </div>

      {children}
    </>
  )
}
