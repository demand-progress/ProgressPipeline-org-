import React, { Component } from "react"


class Home extends Component {
    constructor(props){
        super(props)
    }
   
    render(){
        const { navigatePage } = this.props
    return ( 
        <div>
       
        <div>
            <p>
            A “blue wave” this November could bring transformative change to Washington. But, to realize the potential, it’s not only necessary to win elections. It’s also necessary to plan for what happens after a Democratic takeover in one or both houses on Capitol Hill.
            </p>
            <p>
            With projected Democratic gains in November, there will likely be a necessity to hire upwards of 150 new legislative policy staffers.  To meet this requirement, we’ll need a major new infusion of talent in Washington.
            </p>
            <p>
            A coalition of organizations, including the new Congressional Progressive Caucus Center, is looking to build a slate of talented and diverse progressives to present to new and current Members of Congress as potential new staff hires following the November elections.
            </p>
            <p>
            Congressional staff have long played a crucial role in government—negotiating and writing legislation, advising agencies, conducting investigations, and communicating policies to the public.  Staff capacity will be key to developing creative ideas, converting them into sound policies, messaging them effectively, and mobilizing the electorate around them—all while holding the administration accountable.
            </p>

        </div>
        <div className="links">
            <p>
                <a href="#about" onClick={ navigatePage }><strong>About the Program</strong></a>
            </p>
            <p>
                <a href="#capitol" onClick={ navigatePage }><strong>Why Work on Capitol Hill</strong></a>
            </p>
            <p>
                <a href="#pipeline" onClick={ navigatePage }><strong>Why Apply for the Progressive Talent Pipeline</strong></a>
            </p>
            <p>
                <a href="#who" onClick={ navigatePage }><strong>Who We Are Looking For</strong></a>
            </p>
            <p>
                <a href="#apply" onClick={ navigatePage }><strong>Apply</strong></a>
            </p>
        </div>
    </div>
        );
    };
  };

export default Home;