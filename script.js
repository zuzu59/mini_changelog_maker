function clickedButton() {
  document.getElementById("results").innerHTML = "<b>Test</b>";
  console.log("abc");
}

async function getTemperature() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=lausanne&appid=<your_token>";
  const response = await fetch(url);
  const json = await response.json();
  document.getElementById("results").innerHTML = json.main.temp;
}

setInterval(getTemperature, 10000);

async function getGithub() {
  const commits = [];
  for (let i = 1; i < 10; i++) {
    const url =
      "https://api.github.com/repos/GinierClasses/holydraw/commits?page=" + i;
    const response = await fetch(url);
    const newCommits = await response.json();
    commits.push(...newCommits);
  }
  debugger;
  const messages = commits.map((commit) => commit.commit.message);
  const features = messages.filter((message) => message.match(/^feat/));
  const fix = messages.filter((message) => message.match(/^fix/));
  console.log({ features, fix });
  document.getElementById("textarea").innerHTML = messages.join("\n");
}
