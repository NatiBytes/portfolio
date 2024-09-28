import { useEffect } from "react";
import Head from "next/head";

const ContactPage = () => {
  useEffect(() => {
    // Load the Jira Collector script
    const script = document.createElement("script");
    script.src =
      "https://your-jira-instance.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/-tqnsjm/b/24/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=YOUR_COLLECTOR_ID";
    script.async = true;
    document.body.appendChild(script);

    // Configure the collector
    window.ATL_JQ_PAGE_PROPS = {
      triggerFunction: (showCollectorDialog) => {
        // You can customize when and how the collector appears
        // For example, you might want to show it when a button is clicked
        document.getElementById("feedback-button").onclick =
          showCollectorDialog;
      },
    };

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Click the button below to provide feedback
        or report an issue.
      </p>
      <button id="feedback-button">Provide Feedback</button>
    </div>
  );
};

export default ContactPage;
