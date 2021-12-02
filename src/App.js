import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import clouds from "./images/clouds.svg";
import sunny from "./images/sunny.svg";
import north from "./images/north.svg";
import {
  Blur,
  DateS,
  Flex,
  FlexColumn,
  Image,
  Input,
  Main,
  Row,
  Section,
  Temp,
  Time,
  Title,
} from "./styledComponents";

const api = {
  key: "816f698aa8247668420fa9b43dfd7871",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const dateBulder = (d) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const renderImage = () => {
    if (typeof weather.main !== "undefined") {
      if (weather.main.temp > 16) {
        return <Image src={sunny} />;
      } else if (weather.main.temp <= 0) {
        return <Image src={north} />;
      } else if (weather.main.temp < 16) {
        return <Image src={clouds} />;
      }
    }
  };

  return (
    <Main>
      <Section>
        <Flex>
          <Input
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
            value={query}
          />
          <RiSearch2Line
            style={{ transform: "translateX(-23px)", color: "#A6A6A6" }}
          />
        </Flex>
        {typeof weather.main != "undefined" ? (
          <>
            <FlexColumn>
              <Title>
                {weather.name}, {weather.sys.country}
              </Title>
              <Row>
                {renderImage()}
                <Temp>{Math.round(weather.main.temp)}°c</Temp>
              </Row>
            </FlexColumn>
            <Blur>
              <Row>
                <Time>
                  {new Date().getHours().toLocaleString() +
                    ":" +
                    new Date().getMinutes().toLocaleString()}
                </Time>
                <p>AM</p>
              </Row>
              <DateS>{dateBulder(new Date())}</DateS>
            </Blur>
          </>
        ) : (
          ""
        )}
      </Section>
    </Main>
  );
};

export default App;
