document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('recipe');
    // const appRecette = document.getElementsByClassName('recettes');

    fetch('http://localhost:8080/recipe/approuved')
        .then(response => response.json())
        .then(data => {
            let i = 0;
            data.forEach((item, i) => {

                // Créer un div de membre d'équipe avec les classes spécifiées
                const recipeCardDiv = createRecipeCardDiv(item);
                //const recettesCard = createMissionTab(item, i)
                i++;
                // Ajouter le div de membre d'équipe au conteneur parent
                appContainer.appendChild(recipeCardDiv);
                //appRecette.appendChild(recettesCard)

            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données:', error);
        });
    const appRecette = document.getElementsByClassName('recettes')[0];

    console.log(appRecette)
    // const appRecette = document.getElementsByClassName('recettes');

    fetch('http://localhost:8080/recipe/approuved')
        .then(response => response.json())
        .then(data => {
            let i = 0;
            data.forEach((item, i) => {
                console.log("Data: ", data.length)
                console.log("i", i)
                console.log("Data: ", data)

                // Créer un div de membre d'équipe avec les classes spécifiées

                const recettesCard = createMissionTab(item, i)
                i++;
                // Ajouter le div de membre d'équipe au conteneur parent
                // appContainer.appendChild(recipeCardDiv);
                appRecette.appendChild(recettesCard)

            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données:', error);
        });

    const teamContainer = document.getElementById('team');

    fetch('http://localhost:8080/chefs/')
        .then(response => response.json())
        .then(data => {
            // Parcourir les données récupérées
            data.forEach(item => {
                // Créer un div de membre d'équipe avec les classes spécifiées
                const teamCardDiv = createTeamCardDiv(item);
                // Ajouter le div de membre d'équipe au conteneur parent
                teamContainer.appendChild(teamCardDiv);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données:', error);
        });
});

function createRecipeCardDiv(item) {
    const recipeCardDiv = document.createElement('div');
    recipeCardDiv.classList.add('col-md-4');

    const recipeCardContent = `
    <div class="product-item me-3">
        <a href="single-product.html" class="product-image"><img src="${item.image}"
                class="img-fluid"></a>
        <div class="text-comtent text-center text-hover">
            <h5 class="pt-4">${item.title}</h5>
            <p>${item.chef.firstname} ${item.chef.lastname}</p>
           
        </div>
    </div>
    `;

    recipeCardDiv.innerHTML = recipeCardContent;
    return recipeCardDiv;
}


function createTeamCardDiv(item) {
    console.log(item)
    const teamCardDiv = document.createElement('div');
    teamCardDiv.classList.add('col-md-4');

    const teamCardContent = `
    <div class="product-item me-3">
    <div href="single-product.html" class="product-image"><img src="${item.image}"
            class="img-fluid"></div>
    <div>
    <br/>
        <h5>${item.firstname} ${item.lastname}</h5>
       
       
    </div>
</div>
    `;

    teamCardDiv.innerHTML = teamCardContent;
    return teamCardDiv;
}

function createMissionTab(item, i) {

    /** <div class="tab-pane fade show active" role="tabpanel" id="nav-missions">
          <div class="tab-pane fade" role="tabpanel" id="nav-values" aria-labelledby="nav-values-tab">
          <div class="tab-pane fade" role="tabpanel" id="nav-goals" aria-labelledby="nav-goals-tab">
       */


    //const valuesTabDiv = document.createElement('div');
    const valuesTabDiv = document.createElement('div');
    const valuesTabDiv1 = document.createElement('div');
    const valuesTabDiv2 = document.createElement('div');
    const valuesTabDiv3 = document.createElement('div');
    if (i == 0) {
        //  const valuesTabDiv1 = document.createElement('div');
        console.log(item)
        console.log(i)
        //    const valuesTabDiv = document.createElement('div');
        valuesTabDiv1.classList.add('tab-pane', 'fade', 'show', 'active');
        valuesTabDiv1.setAttribute('role', 'tabpanel');
        valuesTabDiv1.setAttribute('id', 'nav-missions');
        const valuesContent = `
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-image" style="background-image: url(${item.image});background-size: cover;"></div>
                </div>
                <div class="text-content col-md-6 bg-Peach p-5">
                <h3 class="mb-4">${item.title}</h3>
                <p>${item.details}</p>
                <p>Happy cooking!</p>
                </div>
            </div>
        </div>
    `;

        valuesTabDiv1.innerHTML = valuesContent;
        //valuesTabDiv.innerHTML = valuesTabDiv1
        return valuesTabDiv1;
        // valuesTabDiv.setAttribute('aria-labelledby', 'nav-values-tab');
    }
    if (i == 1) {
        //  const valuesTabDiv2 = document.createElement('div');
        console.log(item)
        console.log(i)
        //const valuesTabDiv = document.createElement('div');
        valuesTabDiv2.classList.add('tab-pane', 'fade');
        valuesTabDiv2.setAttribute('role', 'tabpanel');
        valuesTabDiv2.setAttribute('id', 'nav-values');
        valuesTabDiv2.setAttribute('aria-labelledby', 'nav-values-tab');
        const valuesContent = `
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-image" style="background-image: url(${item.image});background-size: cover;"></div>
                </div>
                <div class="text-content col-md-6 bg-Peach p-5">
                <h3 class="mb-4">${item.title}</h3>
                <p>${item.details}</p>
                <p>Happy cooking!</p>
                </div>
            </div>
        </div>
    `;

        valuesTabDiv2.innerHTML = valuesContent;
        // valuesTabDiv.innerHTML = valuesTabDiv2;
        // return valuesTabDiv2;

    }
    if (i == 2) {
        //   const valuesTabDiv3 = document.createElement('div');
        console.log(item)
        console.log(i)
        valuesTabDiv3.classList.add('tab-pane', 'fade');
        valuesTabDiv3.setAttribute('role', 'tabpanel');
        valuesTabDiv3.setAttribute('id', 'nav-goals');
        valuesTabDiv3.setAttribute('aria-labelledby', 'nav-goals-tab');
        const valuesContent = `
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-image" style="background-image: url(${item.image});background-size: cover;"></div>
                </div>
                <div class="text-content col-md-6 bg-Peach p-5">
                    <h3 class="mb-4">${item.title}</h3>
                    <p>${item.details}</p>
                    <p>Happy cooking!</p>
                </div>
            </div>
        </div>
    `;

        valuesTabDiv3.innerHTML = valuesContent;
        //valuesTabDiv.innerHTML = valuesTabDiv3;
        //return valuesTabDiv3;
    }



}

