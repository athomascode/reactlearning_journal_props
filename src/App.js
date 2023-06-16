import journaldata from './components/journaldata'
import Journal from './components/Journal'

const displaydata = journaldata.map(item => {
  return (
    <Journal 
      key = {`journal-${item.id}`}
      {...item}
      // title = {item.title}
      // location = {item.location}
    />
  ) 
})

function App() {
  return (
    <div className="App">
      {displaydata}
    </div>
  );
}

export default App;
