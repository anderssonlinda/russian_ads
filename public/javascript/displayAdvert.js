
  
function displayAdverts(response, number) { 

    if (number%2 ==!0 && response.data[number].image != null) {
      
        //make a variable to establish full list of interests
        var interests = response.data[number].interests
        var alsoInterests = response.data[number].interests_also_match

        //remove nulls
        if (interests !== null) {
            var interestsString = interests.join()
        } else {
            interestsString = ""
        }
        if (alsoInterests !== null) {
            var alsoInterestsString = alsoInterests.join()
        } else {
            alsoInterestsString = ""
        }
        //join the two fields to get one final string of interests 
        var finalInterestsString = interestsString + alsoInterestsString

        //grab the creation date from data
        var creationDate = response.data[number].ad_creation_date
        if (creationDate !== null && creationDate !== undefined) {
            var newCreationDate = creationDate.slice(0, 10)
        }
            
        //grab the amount spent, impressionsm and currency
        let adSpend = response.data[number].ad_spend
        let impressions = response.data[number].impressions
        let currency = response.data[number].ad_spend_currency

        //remove any dollar denominated data
        if (currency == "USD") {
            adSpend = adSpend * 77
        }

        //grabbing the image and placing in new element
        img_url = response.data[number].image
        let img = document.createElement("img")
        img.src = img_url
        img.classList.add("card")

        //make our new elements divs, to host the image and append to our HTML parent advert-container
        adContainer1 = document.createElement("div")
        adContainer2 = document.createElement("div")
        adContainer3 = document.createElement("div")
        adContainer4 = document.createElement("div")
        adSpendBox = document.createElement("div")
        interestsBox = document.createElement("div")
        impressionsBox = document.createElement("div")
        creationDateBox = document.createElement("div")

        adContainer1.classList.add("scene") 
        adContainer1.classList.add("scene--card")
        adContainer2.classList.add("card")
        adContainer3.classList.add("card__face")
        adContainer3.classList.add("card__face--front")
        adContainer4.classList.add("card__face")
        adContainer4.classList.add("card__face--back")

        //Using dataset for sorting by spend or impressions
        adContainer1.dataset.impressions = impressions
        adContainer1.dataset.spend = adSpend

        adContainer2.addEventListener('click', function(event) {
            event.target.parentNode.parentNode.classList.toggle('is-flipped');

        });
        

        //make an adSpend div to append
        adSpendBox.classList.add("back-card-info")
        adSpendBox.textContent = `Rubles Spent:\n ${Math.round(adSpend)}`
        adContainer4.appendChild(adSpendBox)

        //make an impressions div to append
        impressionsBox.classList.add("back-card-info")
        impressionsBox.textContent = `Impressions: ${impressions}`
        adContainer4.appendChild(impressionsBox)

        //make a creation-date div to append
        creationDateBox.classList.add("back-card-info")
        creationDateBox.textContent = `Creation Date: ${newCreationDate}`
        adContainer4.appendChild(creationDateBox)

        //make an interests div to append
        interestsBox.classList.add("back-card-info")
        interestsBox.textContent = `Interests: ${finalInterestsString}`
        if (finalInterestsString == "") {
            interestsBox.classList.add("hidden")
        }
        adContainer4.appendChild(interestsBox)

        advertContainerGreatGrandad = document.querySelector(".advert-container")
        
        advertContainerGreatGrandad.appendChild(adContainer1)
        adContainer1.appendChild(adContainer2)
        adContainer2.appendChild(adContainer3)
        adContainer2.appendChild(adContainer4)
        adContainer3.appendChild(img)
    }    
}

