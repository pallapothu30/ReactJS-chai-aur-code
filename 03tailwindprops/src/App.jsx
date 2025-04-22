import Card from "./components/Card";

function App() {
  const players = [
    {
      name: "Stephen Curry",
      description: "NBA Player | Point Guard | Greatest Shooter",
      image:
        "https://media.gettyimages.com/id/2175731619/fr/photo/san-francisco-california-stephen-curry-of-the-golden-state-warriors-poses-for-the-media.jpg?s=612x612&w=0&k=20&c=-OJwE709ujy2eb54uc4gBFjITMJnflA4mA2YZf60l1Q=",
      profileLink: "https://x.com/StephenCurry30",
    },
    {
      name: "LeBron James",
      description: "NBA Player | Small Forward | 4x Champion",
      image:
        "https://media.gettyimages.com/id/2046569631/fr/photo/los-angeles-ca-lebron-james-of-the-los-angeles-lakers-celebrates-after-scoring-his-40-000th.jpg?s=1024x1024&w=gi&k=20&c=hD_nlfKpmwyIKEfwuBAKOp5YO1qbgyO_Q3lpfRqYPnQ=",
      profileLink: "https://x.com/KingJames",
    },
    {
      name:"Kyrie Irving",
      description: "Best Dribbler | Ankle Breaker | Clutch Player",
      image:"https://media.gettyimages.com/id/2175780142/fr/photo/dallas-texas-kyrie-irving-of-the-dallas-mavericks-poses-for-a-portrait-during-the-dallas.jpg?s=1024x1024&w=gi&k=20&c=WfHl6sEpQ2JmPk6PbvnkBkjOfLysAKr1jw1smRXVjmQ=",
      profileLink: "https://x.com/KyrieIrving"
    },
    {
      name:"Zion Williamson",
      description: "Athletic | NBA Draft'19 1st pick| Favourite Player",
      image: "https://media.gettyimages.com/id/1805090607/fr/photo/new-orleans-louisiana-zion-williamson-of-the-new-orleans-pelicans-reacts-after-dunking-the.jpg?s=1024x1024&w=gi&k=20&c=iaBUlYJKXmKFgRYUgUSVYPtPhCmNGHxtf0X6ddPAi9k=",
      // profileLink: "https://x.com/luka7doncic"
    },
    {
      name:"Luka Doncic",
      description: "European | 1x NBA Finals | AllRounder",
      image: "https://media.gettyimages.com/id/2152273140/fr/photo/oklahoma-city-oklahoma-luka-doncic-of-the-dallas-mavericks-reacts-during-the-fourth-quarter.jpg?s=1024x1024&w=gi&k=20&c=iE06lwgEWEbkrPpNL5bzhcjPVmaeGlgqiLdxxK0oaJ4=",
      profileLink: "https://x.com/luka7doncic"
    },
    {
      name : "Lamelo Ball",
      description : "FreeStyle | StreetBall | Energetic",
      image: "https://media.gettyimages.com/id/1390183849/fr/photo/charlotte-north-carolina-lamelo-ball-of-the-charlotte-hornets-lobs-up-the-ball-for-an-alley.jpg?s=1024x1024&w=gi&k=20&c=8t-WhDeSrLkmjFWXg-eeLhADQUz3Je-N_BCaBfgKbew=",
      // profileLink:
    },
    
    // Add more players as needed
  ];

  return (
    <div>
      <h1 className="text-5xl text-center mb-4 p-5 ">
        NBA Players - My Hall of Fame
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {players.map((player, index) => (
          <Card
            key={index}
            name={player.name}
            description={player.description}
            image={player.image}
            profileLink={player.profileLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
