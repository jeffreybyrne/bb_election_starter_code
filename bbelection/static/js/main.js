document.addEventListener("DOMContentLoaded", function() {
  const electionList = document.querySelector('#election_list');
  axios.get("https://bb-election-api.herokuapp.com/")
    .then((resp) => {
      resp.data.candidates.forEach((element) => {
        let newLi = document.createElement('li');
        newLi.innerText = "Name: " + element.name + "\nVotes: " + element.votes;
        electionList.appendChild(newLi);
      })
    })
});
