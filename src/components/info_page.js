import React, { Component } from 'react';
import InfoCards from './info_cards';

class InfoPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            info : [{ companyName: 'Twitch', 
                companyDescription : "fkdl;a;kdflakjsmngieslmcnvzsikdhfl  klasdflakh ldfja kldfkadfehldknf ahei fadskvh e;a;h jdfh eakldmvhcuvema ich ehumd uedakfj ea;kdhf ;aeh", 
                websiteUrl: "www.Abasdasdac.com", 
                positionLocation : "San francisco", 
                positionType: "Junior", 
                positionTitle: "Software Developer", 
                sponsorsVisa: "No", 
                recruiterName: "John Thompson", 
                recruiterEmail: "JT@gmail.com", 
                didApply: true, 
                markets: "Wat", 
                createdAt: Date(6786786), 
                updatedAt: Date(6786786211), 
                appliedAt: Date(678678612351)
        },
        { companyName: 'YouTube', 
                companyDescription : "fkdl;a;kdflakjsmngieslmcnvzsikdhfl  klasdflakh ldfja kldfkadfehldknf ahei fadskvh e;a;h jdfh eakldmvhcuvema ich ehumd uedakfj ea;kdhf ;aeh", 
                websiteUrl: "www.asdasfas.com", 
                positionLocation : "San francisco", 
                positionType: "Junior", 
                positionTitle: "AI Developer", 
                sponsorsVisa: "No", 
                recruiterName: "Sara Jones", 
                recruiterEmail: "SJ@gmail.com", 
                didApply: false, 
                markets: "Wat", 
                createdAt: Date(6786786), 
                updatedAt: Date(6786786211), 
                appliedAt: Date(678678612351)
        }
    ]
    }
}

    render() {
        return (
            <div>
                <InfoCards pageInfo = {this.state.info}/>
            </div>
        );
    }
}

export default InfoPage;