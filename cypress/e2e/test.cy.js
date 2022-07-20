describe('empty spec', () => {
  it('passes', () => {
    let n=0
    let url ="https://en.wikipedia.org/wiki/Doctor_Strange_in_the_Multiverse_of_Madness"
    let links=[]
    let uniqueLinks=[]
    let count =0
   cy.scrap(url,1,links,uniqueLinks,count)

  })
})