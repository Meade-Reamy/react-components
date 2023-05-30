// TODO
const { useState } = React;
const ListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const style = {
    fontWeight: isDone ? 'bold' : 'normal',
  };
 return (
   <li style={style} onMouseOver={() => setIsDone(!isDone)}>
   {props.item}
   </li>
 );
};

const Grocery = (props) => (
<ol>
{props.item.map((item) => (
  <ListItem item={item} />
))}
</ol>
);

const App = () =>  (
  <div>
    <h2>Grocery List</h2>
    <Grocery item={['apples', 'peanuts']} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);
