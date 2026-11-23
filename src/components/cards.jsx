import { useEffect, useState } from "react";
import '../styles/cards.css'
import Card from "./card.jsx";
export default function Cards ({ cards, setCards }) {

    return (
        <div className='cards'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}