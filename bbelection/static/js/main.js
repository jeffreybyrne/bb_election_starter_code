document.addEventListener("DOMContentLoaded", function() {
  const electionList = document.querySelector('#election_list');
  axios.get("https://bb-election-api.herokuapp.com/")
    .then((resp) => {
      resp.data.candidates.forEach((element) => {
        let newLi = document.createElement('li');
        const newForm = document.createElement('form');
        newForm.method = "POST";
        newForm.action = "https://bb-election-api.herokuapp.com/vote";
        const newButton = document.createElement('button');
        newButton.innerText = `Vote for ${element.name}`;
        const newInput = document.createElement('input');
        newInput.name = "id";
        newInput.value = element.id;
        newInput.setAttribute("type", "hidden");
        newForm.appendChild(newInput);
        newForm.appendChild(newButton);
        newLi.innerText = "Name: " + element.name + "\nVotes: " + element.votes;
        newLi.appendChild(newForm);
        electionList.appendChild(newLi);
      })
    })
});
