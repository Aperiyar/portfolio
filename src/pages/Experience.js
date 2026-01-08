import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import RedeemIcon from "@material-ui/icons/Redeem";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Higher Secondary School, Vellalore -Coimbatore
          </h3>
          <p> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BCA- KSG College of Arts & Science Coimbatore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Applications</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2020 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            E-Publishing Pagination
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            TNQ Technologies -coimbatore
          </h4>
          <p>
            <ul>
              <li>
                {" "}
                3b2 xml based pagination Sectioning : Divide content into
                chapters, sections, and subsections.{" "}
              </li>
              <li>
                {" "}
                Metadata Tagging : Add metadata for sections, headings, and
                other structural elements.
              </li>
              <li>
                {" "}
                Pagination : Use 3B2 software tool to automatically paginate the
                document.{" "}
              </li>
              <li>
                Manual Adjustments : Make manual adjustments to fix any
                pagination issues (widows, orphans, line breaks).
              </li>
            </ul>{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 – Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            TechSpot Technologies – Remote
          </h3>

          <p>
            <ul>
              <li>
                {" "}
                Continued the same responsibilities as in the previous role,
                working remotely.
              </li>
              <li>
                {" "}
                Worked on content structuring, metadata tagging, and pagination
                manually.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<RedeemIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Full-Stack Web application Development with React - GUVI
          </h4>

          <p>
            <a href="https://www.guvi.in/certificate?id=76E142b8p9L9D17r62">
              view Certificate
            </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
