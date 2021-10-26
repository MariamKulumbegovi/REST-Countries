export const CounterValue=({value})=> {
    console.log("counter value rerender")
    return (
    <div className="h">
        <h1 className="h">Let's count- {value}</h1>
      </div>
    )
}