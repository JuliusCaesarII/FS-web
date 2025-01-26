const App = () => {
  return (
    <div class="flex items-center flex flex-col mt-8">
      <h1> Hello </h1>
      <div class="flex-wrap gap-8 justify-center flex items-center mt-8">
        <div class="flex-col flex items-center justify-center border-white border border-solid bg-[#535bf2] rounded-xl">
          <h1> Project 1 </h1>
          <p> Description </p>
        </div>
        <div class="flex-col flex items-center justify-center border-white border border-solid bg-[#535bf2] rounded-xl">
          <h1> Project 2 </h1>
          <p> Description </p>
        </div>
      </div>
    </div>
  )
}

export default App;