import "src/App.css"
// import React from "react"
import { HPEliteBook } from "src/components/keyboards/HPEliteBook.jsx"
import { MacBookPro } from "src/components/keyboards/MacBookPro.jsx"
import { ExternalKeyboard } from "src/components/keyboards/ExternalKeyboard.jsx"
import "src/components/keyboards.scss"
// import { Hp } from "src/components/keyboards/Hp.jsx"
import { Title } from "src/components/title/Title.jsx"
import { Dropdown } from "src/components/Common/Dropdown/Dropdown.jsx"
// import Select from "@mui/joy/Select"
// import Option from "@mui/joy/Option"
import { TabProvider } from "src/components/Common/Tab/TabProvider.jsx"
import { TabList } from "src/components/Common/Tab/TabList.jsx"
import { TabContent } from "src/components/Common/Tab/TabContent.jsx"

export function App() {
  /*const [layout, setLayout] = useState("macbookPro")

  const handleChange = (event) => {
    setLayout(event.target.value)
  }*/
  // const keyboards = [
  //   {
  //     name: "MacbookPro",
  //     displayName: "Macbook Pro",
  //     country: "US",
  //   },
  //   {
  //     name: "HP",
  //     displayName: "Hp",
  //     country: "ES",
  //   },
  //   {
  //     name: "MacbookPro",
  //     displayName: "Another one",
  //     country: "ES",
  //   },
  // ]

  return (
    <TabProvider>
      <header>
        <Title titleText="Keyglow" />
        <span>Keyboard highlighter</span>
      </header>
      <main>
        <TabContent index={0}>
          <ExternalKeyboard />
        </TabContent>
        <TabContent index={1}>
          <HPEliteBook />
        </TabContent>
        <TabContent index={2}>
          <MacBookPro />
        </TabContent>
      </main>
      <aside id="action-menu">
        <div>
          <div>Select a keyboard:</div>
          <TabList
            labels={[
              "HP Wired Desktop 320K",
              "HP Elitebook 13''",
              "Macbook Pro",
            ]}
          />
        </div>

        <Dropdown title="What is this?">
          This tool allows you to highlight keys and download clear images to
          visually communicate key combinations, thus simplifying instructions
          and making keyboard navigation easy for everyone. By{" "}
          <a
            href="https://github.com/carlostxrres"
            target="_blank"
            rel="noopener noreferrer"
          >
            carlostxrres
          </a>
          .
        </Dropdown>
      </aside>
      {/* <footer>
        <div>by Carlos</div>
      </footer> */}

      {/* <div id="lightswitch" className="key">
        <span>&#183;</span> light
      </div> */}

      {/* <section className="App">
        {users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))}
      </section> */}
    </TabProvider>
  )
}
