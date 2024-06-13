const url = "https://api.clashofclans.com/v1/players/";
// const btn = document.querySelector("#btn");
const code = "%239G2C29CJL";
const authToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNjBmMWYyLTM0N2EtNDA2Yi1iNTVmLTJhOGQ0ZmVhMjlkNyIsImlhdCI6MTcxODE5OTM0Mywic3ViIjoiZGV2ZWxvcGVyL2Y1Njc2NDdhLWUwNDYtOTIwOS00YTE3LTQyZTMwNGVmYTljNSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy41NC4xMDIuMzgiXSwidHlwZSI6ImNsaWVudCJ9XX0.fRP-W1uTMP3JnLYEC_8u2mSNzcQFizhyALGv1cU5fHa60CeDNxbgdFt9UoKXbcuW8sq5ihPClUlDQyzNMbxxRA"
const getData = async () => {
  console.log("hello");
  let response = await fetch(url + `${code}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });

  let data = await response.json();
  console.log(data);
};

// btn.addEventListener("click", () => {
//   getData();
// });

getData();
