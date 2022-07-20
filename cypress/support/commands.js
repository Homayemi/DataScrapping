Cypress.Commands.add('scrap', (url, n, links, uniqueLinks,count) => {
    cy.log(url)
    cy.visit(url)
    cy.log(links[0])
    cy.url().then((url) => { cy.url().should('include', 'wikipedia.org/wiki'); })
    expect(n).to.be.lessThan(20)
    cy.get('a').then($el => {
        const itemCount = Cypress.$($el).length
        cy.log(itemCount)
        for (let i = 0; i < itemCount; i++) {
            cy.get('a')
                .eq(i)
                .invoke('attr', 'href').then((link) => {
                    if (link && link.includes("http") && link.includes("wikipedia.org/wiki")){          
                        links.push(link)
                        if(!uniqueLinks.includes(link) ){
                            uniqueLinks.push(link)
                   
                           cy.wrap(uniqueLinks).as("uniqueLinks")
                        }
              
                        }

                })

        }
       

        if (count==n){
            cy.log("finished")
           
        }
        else{
            cy.log("Entered")
            cy.get("@uniqueLinks").then((arr)=>{
                cy.log("here")
                cy.log(arr)
                cy.log(arr[1])
                cy.scrap(arr[count],n,links,uniqueLinks,count)
            })
        
        }

    }
    )



}

)