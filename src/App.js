import classes from "./App.module.css";
import NavigationLarge from "./components/UI/NavigationLarge";
import NavigationSmall from "./components/UI/NavigationSmall";
import Description from "./components/UI/Description";
import ImagesHeroSection from "./components/UI/ImagesHeroSection";
// size:s1, s2, s3, s4; img:(src); isSelected;
function App() {
  let w = window.innerWidth;
  return (
    <>
      {w >= 768 ? <NavigationLarge /> : <NavigationSmall />}
      <div className={classes["product-section"]}>
        <div>
          <ImagesHeroSection />
        </div>
        <div>
          <Description />
        </div>
      </div>
    </>
  );
}

export default App;
