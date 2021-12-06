import {server} from '../fetch';

export const fetchPublicationContent = async() =>{
    const res1 = await fetch(`${server}/publication/booksPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const booksPageHeading = await res1.json()

    const res2 = await fetch(`${server}/publication/books`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const booksSection = await res2.json()

    const res3 = await fetch(`${server}/publication/resourcesPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const resourcesPageHeading = await res3.json()

    const res4 = await fetch(`${server}/publication/resources`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const resourcesSection = await res4.json()

    const res5 = await fetch(`${server}/publication/pressReleasePageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const pressReleasePageHeading = await res5.json()

    const res6 = await fetch(`${server}/publication/pressRelease`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const pressReleaseSection = await res6.json()

    const res7 = await fetch(`${server}/publication/booksHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const booksHeadingSection = await res7.json()

    const res8 = await fetch(`${server}/publication/resourcesHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const resourcesHeadingSection = await res8.json()

    const res9 = await fetch(`${server}/publication/pressReleaseHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const pressReleaseHeadingSection = await res9.json()


    

 return {booksPageHeading, booksHeadingSection, booksSection, resourcesPageHeading, resourcesHeadingSection, resourcesSection,pressReleasePageHeading, pressReleaseHeadingSection, pressReleaseSection}
}