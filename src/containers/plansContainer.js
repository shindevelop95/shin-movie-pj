import React from 'react';
import {Plans, Card} from '../components'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import plansData from '../fixtures/plans.json'

export function PlansContainer(){
    return (
        <Plans>
            <Plans.Title>Our Plans & Pricing</Plans.Title>
            <Plans.Wrapper>
                {plansData.map((item)=>(
                    <Plans.Group key={item.id} data-aos={item.data}>
                        <Plans.Text><DoneAllIcon/>{item.title1}</Plans.Text>
                        <Plans.Text><DoneAllIcon/>{item.title2}</Plans.Text>
                    </Plans.Group>
                
                ))}
            </Plans.Wrapper>
            <Card>
                <Card.Group data-aos="fade-up">
                    <Card.Title>Free Trial</Card.Title>
                    <Card.SubTitle>Free</Card.SubTitle>
                    <Card.Text>HD Available</Card.Text>
                    <Card.Text>Watch on any Device</Card.Text>
                    <Card.Text>20 movies and shows</Card.Text>
                    <Card.Button>Choose Plan</Card.Button>
                </Card.Group>
                <Card.Group data-aos="fade-down">
                    <Card.Title>Starter</Card.Title>
                    <Card.SubTitle><i>$</i>10<span>/month</span></Card.SubTitle>
                    <Card.Text>HD Available</Card.Text>
                    <Card.Text>Watch on any Device</Card.Text>
                    <Card.Text>20 movies and shows</Card.Text>
                    <Card.Button>Choose Plan</Card.Button>
                </Card.Group>
                <Card.Group data-aos="fade-up">
                    <Card.Title>Premium</Card.Title>
                    <Card.SubTitle><i>$</i>17<span>/month</span></Card.SubTitle>
                    <Card.Text>HD Available</Card.Text>
                    <Card.Text>Watch on any Device</Card.Text>
                    <Card.Text>20 movies and shows</Card.Text>
                    <Card.Button>Choose Plan</Card.Button>
                </Card.Group>
            </Card>
        </Plans>
    )
}