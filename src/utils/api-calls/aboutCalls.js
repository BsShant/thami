import { useDispatch } from 'react-redux';
import {server} from '../fetch';

export const fetchAboutContent = async() =>{
    const res1 = await fetch(`${server}/aboutUs/ourPartners`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourPartnersSection = await res1.json()

    const res2 = await fetch(`${server}/aboutUs/ourPartnersHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourPartnersHeadingSection = await res2.json()

    const res3 = await fetch(`${server}/aboutUs/ourPartnersPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourPartnersPageHeading = await res3.json()


    const res4 = await fetch(`${server}/aboutUs/ourTeam`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourTeamSection = await res4.json()

    const res5 = await fetch(`${server}/aboutUs/ourTeamHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourTeamHeadingSection = await res5.json()

    const res6 = await fetch(`${server}/aboutUs/ourTeamPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourTeamPageHeading = await res6.json()




    const res7 = await fetch(`${server}/aboutUs/ourStorySection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourStorySection = await res7.json()

    const res8 = await fetch(`${server}/aboutUs/ourHistorySection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourHistorySection = await res8.json()

    const res9 = await fetch(`${server}/aboutUs/ourStoryPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourStoryPageHeading = await res9.json()



    const res10 = await fetch(`${server}/aboutUs/visionSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const visionSection = await res10.json()

    const res11 = await fetch(`${server}/aboutUs/missionSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const missionSection = await res11.json()

    const res12 = await fetch(`${server}/aboutUs/visionMissionPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const visionMissionPageHeading = await res12.json()


    const res13 = await fetch(`${server}/aboutUs/galleryPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const galleryPageHeading = await res13.json()

    const res14 = await fetch(`${server}/aboutUs/galleryHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const galleryHeadingSection = await res14.json()

    const res15 = await fetch(`${server}/aboutUs/photo`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const photosSection = await res15.json()

    const res16 = await fetch(`${server}/aboutUs/video`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const videosSection = await res16.json()
    const res17 = await fetch(`${server}/aboutUs/associate`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const associateSection = await res17.json()


    

 return ({ourPartnersSection,ourPartnersHeadingSection, ourPartnersPageHeading, ourTeamSection
    , ourTeamHeadingSection, ourTeamPageHeading, ourStorySection, ourHistorySection
    , ourStoryPageHeading, visionSection, missionSection, visionMissionPageHeading
    ,galleryHeadingSection, galleryPageHeading, photosSection,videosSection, associateSection})
}