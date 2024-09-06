import React from "react";
import "./LegalNotice.css";

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({ header, ...rest }) => {
	const itemBtn = "itemBtn";
	const itemBtnExpanded = "itemBtnExpanded";
	const itemContent = "itemContent";
	const itemPanel = "itemPanel";

	return (
		<Item
			{...rest}
			header={
				<>
					{header}
					<img
						className="chevron"
						src="assets\chevron-down.svg"
						alt="Chevron Down"
					/>
				</>
			}
			className="item"
			buttonProps={{
				className: ({ isEnter }) => `${itemBtn} ${isEnter && itemBtnExpanded}`,
			}}
			contentProps={{ className: itemContent }}
			panelProps={{ className: itemPanel }}
		/>
	);
};

function LegalNotice() {
	return (
		<div className="legal-notice">
			<h1>Legal Notice (Impressum)</h1>

			<h2>Information in accordance with Section 5 TMG (Telemedia Act):</h2>
			<p>
				<strong>Steffen Dietz</strong>
				<br />
				Address: Hoheluftchausse 167
				<br />
				20253 Hamburg
				<br />
				Germany
			</p>

			<h2>Contact Information:</h2>
			<p>
				Phone: +49 177 7777175
				<br />
				Email: hello@steffendietz.com
			</p>

			<h2>Responsible for the content according to Section 55 (2) RStV:</h2>
			<p>
				Steffen Dietz
				<br />
				Address: Hoheluftchaussee 167
				<br />
				20253 Hamburg
				<br />
				Germany
			</p>

			<h2>Disclaimer</h2>
			<div className="accordion">
				{/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
				<Accordion transition transitionTimeout={250}>
					<AccordionItem header="Accountability for content" initialEntered>
						The contents of our pages have been created with the utmost care.
						However, we cannot guarantee the contents' accuracy, completeness,
						or topicality. As a service provider, we are responsible for our own
						content on these pages according to the general laws. However, we
						are not obligated to monitor transmitted or stored information from
						external sources or to investigate circumstances that indicate
						illegal activity. Obligations to remove or block the use of
						information according to the general laws remain unaffected.
					</AccordionItem>

					<AccordionItem header="Accountability for links">
						Our offer contains links to external websites. We have no influence
						on the contents of those websites, therefore we cannot guarantee the
						accuracy of the content. The respective provider or operator of the
						linked pages is always responsible for the content. The linked sites
						were checked for possible legal violations at the time of linking.
						Illegal content was not recognizable at the time of linking.
						Permanent monitoring of the content of the linked pages is not
						feasible without concrete evidence of a legal violation. Upon
						notification of violations, we will immediately remove such links.
					</AccordionItem>

					<AccordionItem header="Copyright">
						The content and works on these pages created by the site operator
						are subject to German copyright law. Duplication, processing,
						distribution, or any form of commercialization of such material
						beyond the scope of the copyright law requires the prior written
						consent of its respective author or creator. Downloads and copies of
						these pages are only permitted for private, non-commercial use.
						Insofar as the content on this site was not created by the operator,
						the copyrights of third parties are respected. Contributions of
						third parties on this site are indicated as such. Should you
						nevertheless become aware of a copyright infringement, please notify
						us. Upon notification of violations, we will immediately remove such
						content.
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}

export default LegalNotice;
