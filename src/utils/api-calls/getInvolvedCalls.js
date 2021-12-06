import {server} from '../fetch';

export const fetchGetInvolvedContent = async() =>{
    const res1 = await fetch(`${server}/getInvolved/supportSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const supportSection = await res1.json()

    const res2 = await fetch(`${server}/getInvolved/supportPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const supportPageHeading = await res2.json()

    const res3 = await fetch(`${server}/getInvolved/sponsorSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const donateSection = await res3.json()


    const res4 = await fetch(`${server}/getInvolved/sponsorPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const donatePageHeading = await res4.json()

    const res5 = await fetch(`${server}/getInvolved/memberSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const beMemberSection = await res5.json()

    const res6 = await fetch(`${server}/getInvolved/memberPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const beMemberPageHeading = await res6.json()




    const res7 = await fetch(`${server}/getInvolved/supportPage`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const supportCommunitySection = await res7.json()

    const res8 = await fetch(`${server}/getInvolved/supportPagePageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const supportCommunityPageHeading = await res8.json()

    const res9 = await fetch(`${server}/getInvolved/supportPageHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const supportCommunityHeadingSection = await res9.json()



    const res10 = await fetch(`${server}/getInvolved/donate`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const donateInfoSection = await res10.json()

    const res11 = await fetch(`${server}/getInvolved/donatePageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const donateInfoPageHeading = await res11.json()

    const res12 = await fetch(`${server}/getInvolved/donateHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const donateInfoHeadingSection = await res12.json()


    

    

 return {supportCommunitySection,supportCommunityHeadingSection, supportCommunityPageHeading, supportSection
    , supportPageHeading, donateSection, donatePageHeading, donateInfoSection
    , donateInfoPageHeading, donateInfoHeadingSection, beMemberSection, beMemberPageHeading
    }
}