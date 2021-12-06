import {server} from '../fetch';

export const fetchEventContent = async() =>{
    const res1 = await fetch(`${server}/event/newsPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const newsPageHeading = await res1.json()

    const res2 = await fetch(`${server}/event/news`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const newsSection = await res2.json()

    const res3 = await fetch(`${server}/event/blogsPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const blogsPageHeading = await res3.json()

    const res4 = await fetch(`${server}/event/blogs`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const blogsSection = await res4.json()

    const res5 = await fetch(`${server}/event/ourArticlesPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourArticlesPageHeading = await res5.json()

    const res6 = await fetch(`${server}/event/ourArticles`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourArticlesSection = await res6.json()

    

 return {newsPageHeading, newsSection, blogsPageHeading, blogsSection, ourArticlesPageHeading, ourArticlesSection}
}