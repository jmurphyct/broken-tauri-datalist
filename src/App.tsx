import { For } from "solid-js";
export function App() {

  const osList = [{name: "Edge"}, {name: "Firefox"}, {name: "Chrome"}, {name: undefined}];

  return (
    <>
      <label for="browser">List Label:</label>
      <input list="browsers" name="browser" id="browser"/>
      <datalist id="browsers">
        <For each={osList}>
          {(osOption) => <option value={osOption.name ?? "Uhh"}/>}
        </For>
      </datalist>
  </>
  )
}
