import React from 'react';
import {Plans} from '../components'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import plansData from '../fixtures/plans.json'

export function PlansContainer(){
    return (
        <Plans>
            <Plans.Title>Our Plans & Pricing</Plans.Title>
        <Plans.Wrapper>
            {plansData.map((item)=>(
                <Plans.Group>
                    <Plans.Text><DoneAllIcon/>{item.title1}</Plans.Text>
                    <Plans.Text><DoneAllIcon/>{item.title2}</Plans.Text>
                </Plans.Group>
               
            ))}
            </Plans.Wrapper>
        </Plans>
    )
}