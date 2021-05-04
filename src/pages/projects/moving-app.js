
import React from "react"
import styled from 'styled-components';

import { TopNav } from '../../components';
import { CustomImage } from '../../components/utils';

import style from './moving-app.module.css';

const Container = styled.div`
  background-color: #fff5ee;
  height: 100vh;
  margin: 0;
`;

const Bit = styled.div`
	margin-top: ${props => props.height}px;
`;

const BulletPoint = ({ data }) => (
	<div style={{ display: 'flex', flexDirection: 'row' }}>
		<div>
			•
		</div>
		<div style={{ marginLeft: 8 }}>
			{data}
		</div>
	</div>
);

const Subheading = ({ title, subtitle }) => (
	<section>
		<header>{title}</header>
		{/* <subtitle className={style.bold}>{title}</subtitle> */}
		<div>
			<subtitle>{subtitle}</subtitle>
		</div>
	</section>
);

const Competitor = ({
	name,
	about,
	detailOne,
	detailTwo,
	insight,
	imageSrc,
}) => (
	<div className={style.competitor}>
		<div className={style.logo}>
			<CustomImage src={imageSrc} alt={`${name}-logo`} />
		</div>
		<description className={style.competitonInfo}>
			<b>{name}</b> {about}
			<br/>
			<br />
			<BulletPoint data={detailOne} />
			<br />
			<BulletPoint data={detailTwo} />
		</description>
		<description className={style.competitonInfo}>
			<b>Insight: </b>{insight}
		</description>
	</div>
);

const FlowDiagram = ({ imageSrc, title, description }) => (
	<div style={{ alignItems: 'center' }}>
		<Bit height={48} />
		<div className={style.appFlowTitle}>
			<subtitle className={style.bold}>{title}</subtitle>
			<div style={{ maxWidth: 600 }}>
				<description>{description}</description>
			</div>
		</div>
		<Bit height={36} />
		<div className={style.appFlow}>
			<CustomImage src={imageSrc} alt="Flow: Adding item from within a Box" />
		</div>
	</div>
);

const UserQuote = ({ quote, insight }) => (
	<div className={style.userQuote}>
		<description className={style.bold}>{insight}</description>
		<Bit height={24} />
		<description>
			"{quote}"
		</description>
	</div>
);

const MovingApp = () => {

	return (
		<Container>
			<TopNav />
			<div className={style.root}>
				<div>
					{/* <div className={style.heroImg}>
						<CustomImage src="header_no_bg.png" alt="hero image" />
					</div> */}
				</div>
				<div className={style.contentContainer}>
					{/* <div className={style.sidenav}>
						<a>background</a>
						<a>user research</a>
						<a>competitve research</a>
						<a>ideation & brainstorming</a>
						<a>wireframing</a>
						<a>high-fidelity mockups</a>
					</div> */}
					<div className={style.content}>
						<div className={style.heroImg}>
							<CustomImage src="header_no_bg.png" alt="hero image" />
						</div>
						<h0 className={style.bigTitle}>
							How might we make it less frustrating to move with other people?
						</h0>
						<subtitle>
							<b>Think about</b> the last time you had to move. The general human concensus is that
							moving from one place to another is stressful, especially so during COVID. How can we reduce
							some of that stress?
						</subtitle>
						<div className={style.projectInformation}>
							<div>
								<div className={style.infoTitle}>
									Team
								</div>
								<subtitle>
									Me* (solo project)
								</subtitle>
							</div>
							<div>
								<div className={style.infoTitle}>
									Skills
								</div>
								<subtitle>
									User research, UX Design
								</subtitle>
							</div>
							<div>
								<div className={style.infoTitle}>
									Tools
								</div>
								<subtitle>
									Figma, Notion
								</subtitle>
							</div>
						</div>
						<section>
							<header>Some backstory</header>
							<Bit height={16} />
							<subtitle>
								This project began as the result of a UX Hackathon. 
								The prompt was simple: “design a (digital) product that helps people relocate to a new city or country.”
							</subtitle>
							<Bit height={16} />
							<p>
								In v1, my team chose to focus on the literal moving (think: shipping container type boxes, trucks) aspect of moving. We wanted to modernize and “mobile-ize” a very manual and desktop-only experience.
								<br />
								<div className={style.timeline}>
									<CustomImage src="moving_app_v1.png" alt="start of timeline" />
								</div>
								<p>
									In the following weeks and months, everyone around me seemed to be leaving their homes for other places,
									so I came back to the initial problem statement.
								</p>
								<div className={style.timeline}>
									<CustomImage src="moving_app_v2.png" alt="middle of timeline" />
								</div>
								<subtitle className={style.semibold}>
									<i>
										But I still wasn’t satisfied with my “v2.”
									</i>
								</subtitle>
								<Bit height={16} />
								<subtitle>
									I tried to address too many different things, which made the whole experience feel more "whiplash in the dark
									on Space Mountain" and less "sunset drive on Pacific Coast Highway."
								</subtitle>
								<div className={style.timeline}>
									<CustomImage src="moving_app_v3.png" alt="you are here" />
								</div>
							</p>
						</section>
						<section>
							<sectionTitle>Research</sectionTitle>
							<header>Talking to strangers</header>
							<subtitle>(i.e. user research)</subtitle>
							<Bit height={48} />
							<row className={style.dataCollab}>
								<column>
									<subtitle><b><i>Old data</i></b></subtitle>
									<subtitle>2 user interviews</subtitle>
									<subtitle>1 survey</subtitle>
								</column>
								<div className={style.emoji}>🤝</div>
								<column>
									<subtitle><b><i>New data</i></b></subtitle>
									<subtitle>3 user interviews</subtitle>
									<subtitle>1 survey</subtitle>
								</column>
							</row>
							<Bit height={48} />
							<Bit height={24} />
							<p>
								I interviewed strangers (and friends).
								The main themes I’d discovered initially coding the data stayed largely the same--
								movers, roommates, moving logistics, and packing. But underscoring it all was this:
							</p>
							<Bit height={48} />
							<div className={style.insightContainer}>
								<bigInsight>
									It wasn’t just the management and logistics people were frustrated by, it was the
									<b><i> lack of collaboration and communication.</i></b>
								</bigInsight>
							</div>
							<Bit height={64} />
							<CustomImage src="connection_swirl.png" alt="vector image of swirly line" />
						</section>
						<section>
							<header>A solution would need to have: </header>
							<Bit height={24} />
							<div className={style.quoteRow}>
								<UserQuote
									insight="Intuitive organization"
									quote="It always takes more time than I think to go through everything while 
										unpacking, and I can never remember where things are."
								/>
								<UserQuote
									insight="Asynchronous collaboration"
									quote="It was impossible to sit down together for a long time to sort anything out.
										For a while our group chat was just messages about where stuff was supposed to go."
								/>
								<UserQuote
									insight="Stress-free accountability"
									quote="I have no idea how [my partner] wants some things packed, and I have to
										remind him like 5 times before deals with it."
								/>
							</div>
						</section>
						<section>
						<header>Who is this really for?* </header>
						<subtitle>(i.e. "personas")</subtitle>
						<Bit height={24} />
						<subtitle className={style.semibold}>
							After my research and analysis, I decided it made sense to design for people who:
						</subtitle>
						<Bit height={8} />
						<column>
							<BulletPoint
								data="Are moving with at least one other person"
							/>
							<Bit height={8} />
							<BulletPoint
								data="Prefer to optimize for less future pain in exchange for initial effort"
							/>
							<Bit height={8} />
							<BulletPoint
								data="Like to be organized but doesn't want to invest the kind of time one might spend
									customizing the perfect video game character"
							/>
							<Bit height={8} />
							<BulletPoint
								data="Are very busy or have conflicting schedules with their roommates/housemates"
							/>
						</column>
						</section>
						<section>
							<header>What's already out there?</header>
							<subtitle>(i.e. competitive research)</subtitle>
							<Bit height={24} />
							<column>
								<Competitor
									name="Sortly"
									imageSrc="sortly-logo.png"
									about="is an Android app that tracks “inventory” via a file-folder system, where users
										determine the structure and enter all item details"
									detailOne="Confusing to navigate across and within the folders/files structure"
									detailTwo="Features and language are geared towards business users"
									insight="A file structure might make sense on desktop, but it’s not as intuitive
										and easy to navigate through on a mobile device"
								/>
								<Competitor
									name="Magic Home Inventory"
									imageSrc="magic_home_logo.png"
									about="is Android app with “categorized and hierarchal” inventory system
										primarily for things in the home"
									detailOne="Busy interface that is difficult to parse"
									detailTwo="Takes many taps to navigate to any screen, making the inventory-ing process feel slow"
									insight="Too much information is overwhelming and disenaging, keep it simple and don’t make
										inventory a long process for a single item"
								/>
								<Competitor
									name="MyStuff2 Pro"
									imageSrc="my_stuff_logo.png"
									about="is an iOS app that tracks inventory and can maintain databases of organized information"
									detailOne="Clean and familiar UI that has good signifiers that it’s a database app"
									detailTwo="Requires high investment and customization to get value"
									insight="Take advantage of mobile patterns people are familiar with; simplify to reach people
										who don’t necessarily want a highly detailed database"
								/>
							</column>
						</section>
						<Bit height={48} />
						<section>
							<sectionTitle>The Designing Part</sectionTitle>
							<div>
								<subtitle>
									(i.e. the design/solution)
								</subtitle>
							</div>
							<Bit height={24} />
							<p>
								I decided to design for mobile (moving involves a lot of...moving, after all. Pun intended).
								Taking what I'd learned about my target users and from existing apps, I wanted the app 
								to be <b>intuitive</b>, have a core + <b>clear purpose</b>, offer <b>quick access to important actions</b>,
								and have a <b>clean UI</b>.
							</p>
							<Bit height={24} />
						<Subheading
							title="In the beginning, there was..."
							subtitle="(i.e. ideation & brainstorming)"
						/>
						<Bit height={24} />
							<p>
								I like to work in word bubbles and arrows in conjunction with screen sketches to get my
								ideas down on paper (though technically I used a paper <i>tablet</i>).
							</p>
						<Bit height={24} />
						<div className={style.wireframe}>
							<CustomImage src="brainstorming_small_12.png" alt="screenshot of sketches" />
						</div>
						<Subheading
							title="...followed by some early exploration..."
							subtitle="(i.e. user flows + wireframing)"
						/>
						<Bit height={24} />
							<p>
								I mapped out basic flows and the most important entry points with a diagram to make sure things made sense
								a) within a flow, and b) between each flow.
							</p>
						<Bit height={24} />
						<row>
							<div className={style.loginFlow}>
								<CustomImage src="user_flow_login.png" alt="screenshot of login user flow" />
							</div>
							<div className={style.loginFlow}>
								<CustomImage src="user_flow_push.png" alt="screenshot of push notification user flow" />
							</div>
						</row>
						{/* <Bit height={36} /> */}
						<Bit height={24} />
							<p>
								Wireframes allowed me to break down the structure of the app, what features it made sense to include, and how a user would
								navigate across every screen (without sudden dead-ends or awkward loops).
							</p>
						<Bit height={24} />
						<div className={style.wireframe}>
							<CustomImage src="wireframes.PNG" alt="screenshot of wireframes" />
						</div>
						<Subheading
							title="...until finally"
							subtitle="(i.e. high fidelity mock-ups)"
						/>
						{/* <Bit height={24} /> */}
							{/* <p> */}
								{/* TODO: I need to add an thing about my social photo app base line ahhh */}
								{/* Final flows for the design are enumerated below, including an explanation of a micro-interaction.
							</p>
						<Bit height={24} /> */}
						<Bit height={16} />
						<FlowDiagram
							title="Adding a Box"
							description="The first time a User gets into the app (after sign up/login),
								they will see a prompt to add their first Box via the '+' button."
							imageSrc="flow_add_box.png"
						/>
						<Bit height={16} />
						<FlowDiagram
							title="Box details and actions"
							description="Box details can be edited via action sheet, deleted, or marked as 'packed'."
							imageSrc="box_details.png"
						/>
						<Bit height={16} />
						<FlowDiagram
							title="Adding an item (from a Box)"
							description="Users can select a Box from the home tab,
								and within this Box add a new item."
							imageSrc="flow_add_item_box.png"
						/>
						<Bit height={16} />
						<FlowDiagram
							title="Adding an item (from Tab bar)"
							description="Users can tab the middle tab bar icon to pull up
								the add item form, which opens to the camera view."
							imageSrc="flow_add_item_nav.png"
						/>
						<Bit height={16} />
						<FlowDiagram
							title="Adding an item (from Tab bar)"
							description="Users can tab the middle tab bar icon to pull up
								the add item form, which opens to the camera view."
							imageSrc="flow_add_item_nav.png"
						/>
						<Bit height={16} />
						<FlowDiagram
							title="Sending an item resolution request"
							description="On the add item form, there is an option to 'ask someone instead',
								which allows users to ask a roommate to resolve which Box the item should go in."
							imageSrc="flow_add_item_request.png"
						/>
						<Bit height={16} />
						<FlowDiagram
							title="Resolve an item request"
							description="When a user receives an item request, they receive a push notification and/or
								text. On app open, the request appears prominently at the top of the home tab
								until it has been resolved (multiple requests don't stack, the count appears in the yellow bar)."
							imageSrc="flow_resolve_item.png"
						/>
						<Bit height={16} />
						<FlowDiagram
							title="Remind a roommate"
							description="Sometimes people need a nudge. Users can go into the 'unresolved items' Box
								(which contains all requests received and sent) and select an item and send a reminder."
							imageSrc="flow_remind.png"
						/>
						<Bit height={16} />
						<FlowDiagram
							title="Settings"
							description="View/edit account details and other settings."
							imageSrc="settings.png"
						/>
						</section>
						<Bit height={16} />
						{/* <section>
							TODO: add the list/grid view stuff here as well as the FAB decision
							<sectionTitle>Decisions, decisions</sectionTitle>
							<div>
								<subtitle>
									(i.e. early iterations → final designs)
								</subtitle>
							</div>
						</section> */}
						<section>
							<sectionTitle>But is it any good?</sectionTitle>
							<div>
								<subtitle>
									(i.e. metrics, measuring progress/success)
								</subtitle>
								<Bit height={24} />
								<header>What does success mean?</header>
								<description>
									Refering back to the initial needs of the app design--we want
									to use metrics that reference: intuitive organization, asynchronous collaboration,
									and stress-free accountability.
								</description>
								<Bit height={24} />
								<header>How to measure it?</header>
								<Bit height={8} />
								<description>
									<b>Intuitive organization:</b>
									<br />
										<BulletPoint
											data="The average number of taps it takes to complete an action (e.g. add an item)
												compared to the most efficient happy-path."
										/>
										<BulletPoint
											data="Heatmaps of creation pages"
										/>
									<br />
									<b>Asynchronous collaboration:</b>
									<br />
										<BulletPoint
											data="The ratio of item resolution requests sent to requests resolved"
										/>
										<BulletPoint
											data="The spread of different users responsible for adding a new item within a shared Box"
										/>
									{/* <br /> */}
									{/* <b>Stress-free accountability:</b>
									<br /> */}
								</description>
							</div>
						</section>
						<section>
							<sectionTitle>Takeaways</sectionTitle>
							<div>
								<subtitle>
									(i.e. learnings, lessons, etc.)
								</subtitle>
							</div>
							<Bit height={24} />
							<header>Focus on Focusing</header>
							<description>
								"Focus" has really been an ongoing theme across this every part of this project.
								At the start of the high-fidelity phase, I tried to make my own components/assets for things like
								a mobile top status bar. I realized quickly enough that there is a plethora of resources in the
								design community, and if mastering the Apple HIG wasn't my goal, I should use what I have at my disposal.
							</description>
							<Bit height={24} />
							<header>A <span style={{ textDecoration: 'line-through' }}>Developer</span> Designer Mindset</header>
							<description>
								Part of being a developer is the often unpleasant task of informing your design team of technical constraints
								and proposing an alternative that can sometimes be less exciting or interesting. I had to turn off developer
								auto-pilot and make an active effort to brainstorm ideas across the spectrum of obviously easy to probably impossible before I did any thinking about
								what was actually do-able.
							</description>
						</section>
						{/* <section>
							<sectionTitle>Some final notes</sectionTitle>
							<div>
								<subtitle>
									(i.e. learnings, lessons, etc.)
								</subtitle>
							</div>
						</section> */}
					</div>
				</div>
			</div>
		</Container>
	);
}

export default MovingApp;
