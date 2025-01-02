import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import randomNumberGenerator from "../../Assets/Projects/randomnumbergenerator.jpg";
import jobSearch from "../../Assets/Projects/jobSearch.jpeg"
import destinatonSearch from "../../Assets/Projects/destinatonSearch.png";
import cashWithDrawal from "../../Assets/Projects/cashWithDrawal.png";
import googleSearchSuggestion from "../../Assets/Projects/googleSearchSuggestion.png";
import lettersCount from "../../Assets/Projects/lettersCount.png";
import browserHistory from "../../Assets/Projects/browserHistory.png";
import feedback from "../../Assets/Projects/feedback.png";
import galaryApp from "../../Assets/Projects/gallaryApp.png";
import capitalsApp from "../../Assets/Projects/capitalsApp.png";
import AppStore from "../../Assets/Projects/AppStore.png";
import coinTossGame from "../../Assets/Projects/coinTossGame.png";
import ReviewsApp from "../../Assets/Projects/ReviewsApp.png";
import commentsApp from "../../Assets/Projects/commentsApp.png";
import appointmentsapp from "../../Assets/Projects/appointmentsapp.png";
import moneyManagerApp from "../../Assets/Projects/moneyManagerApp.png";
import EmojiGame from "../../Assets/Projects/EmojiGame.png";
import DigitalTimer from "../../Assets/Projects/DigitalTimer.png";
import StopWatch from "../../Assets/Projects/StopWatch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" ,fontSize : '25px'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobSearch}
              title="Jobby App"
              description="Brought to life an all-encompassing job search platform, Jobby App.
Created pages for Login, Home, Jobs, and Job item details with React components, form inputs, and
event handlers.
Secured user information with JWT tokens, REST API calls, and local storage.
Utilized React Router for protected routes and persisted login state."
              ghLink="https://github.com/Prama1421/Jobby-App-AS-5"
              demoLink="https://jobbyapp0.ccbp.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmojiGame}
              title="Emoji Game"
              description="Built an engaging, emoji-based memory challenge for players. Implemented React components, lists, event listeners, and conditional rendering to bring the game to life. Polished the user experience with CSS styling."
              ghLink="https://github.com/Prama1421/Emoji-Game-CP-18"
              demoLink="https://emojigamel.ccbp.tech/"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <p style={{ color: "white", fontSize : '25px'}}>Practice Projects</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomNumberGenerator}
              title="Random Number Generator"
              description="This Random Number Generator app starts with a display showing the number 0. Upon clicking the 'Generate' button, the app generates and displays a random number between 0 and 100. The application provides a simple yet interactive way for users to generate random numbers within a defined range."
              ghLink="https://github.com/Prama1421/Random-Number-Generator-CP-6"
              demoLink="https://randomnumber0p.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={destinatonSearch}
              title="Destination Search"
              description="The Destination Search app initially displays all destinations from the provided `destinationsList`. As the user enters a value in the search input, the app filters and displays only those destinations whose names contain the input value, regardless of case sensitivity. The `DestinationSearch` component efficiently manages this functionality by receiving the `destinationsList` as a prop, ensuring a seamless and dynamic search experience."
              ghLink="https://github.com/Prama1421/Destination-Search-CP-6"
              demoLink="https://destination0p.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cashWithDrawal}
              title="Cash WithDrawal"
              description="The Cash Withdrawal app starts with an initial balance of 2000 rupees. When a denomination is clicked, the corresponding amount is deducted from the available balance. The CashWithdrawal component efficiently handles this functionality by receiving the denominationsList as a prop, which consists of various denomination objects, allowing users to withdraw specific amounts from their balance."
              ghLink="https://github.com/Prama1421/Cash-Withdrawal-CP-7"
              demoLink="https://cashwithdrawa0p.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleSearchSuggestion}
              title="Google Search Suggestion"
              description="The GoogleSuggestions app provides an intuitive search experience by displaying all suggestions initially and dynamically filtering them based on user input, regardless of case sensitivity. Users can easily update the search field by clicking on an arrow next to any suggestion. The app efficiently handles and displays the filtered suggestions list, making it responsive and user-friendly."
              ghLink="https://github.com/Prama1421/Google-Search-Suggestions-CP-7"
              demoLink="https://googlesearch0.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lettersCount}
              title="Letters Count"
              description="The app displays the count of letters in the input field whenever a non-empty value is entered. This feature provides immediate feedback on the length of the user's input, enhancing the app's usability and user experience."
              ghLink="https://github.com/Prama1421/Letters-Calculator-CP-8"
              demoLink="https://lettecalculator.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={browserHistory}
              title="Browser History"
              description="The app initially displays a list of history items, each with a delete button for easy removal. It filters and shows history items based on the search input, irrespective of case. If no history items match the search input, an 'Empty History View' is shown. The 'Empty History View' is also displayed when all history items are deleted, ensuring a clear and responsive user experience."
              ghLink="https://github.com/Prama1421/Browser-History-AS-1"
              demoLink="https://browserhistoryi.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedback}
              title="FeedBack App"
              description="The app displays a 'Thank You' screen whenever an emoji is clicked. This feature provides immediate feedback to users, enhancing their interaction with the app. The Feedback component receives the resources as a prop to manage and display these interactions effectively."
              ghLink="https://github.com/Prama1421/Feedback-App-CP-11"
              demoLink="https://feedbackapp0.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galaryApp}
              title="Gallary App"
              description="The app initially displays the first image from the list. Users can view different images by clicking on thumbnails, which updates the main display to show the corresponding image. The Gallery component is provided with imagesList, containing details of each image to facilitate this functionality."
              ghLink="https://github.com/Prama1421/Gallery-App-CP-12"
              demoLink="https://galleryapp0.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capitalsApp}
              title="Capitals App"
              description="The app initially displays the country corresponding to the first capital in the list. When a different capital is selected, the app updates to show the respective country for the selected capital. The Capitals component is provided with countryAndCapitalsList, which includes details of countries and their capitals to support this functionality."
              ghLink="https://github.com/Prama1421/Capitals-App-CP-13"
              demoLink="https://capitalsapp0.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AppStore}
              title="App Store"
              description="The app initially shows apps in the 'Social' category by default. When a value is entered in the search input, it filters and displays apps in the active category that include the search term in their name, regardless of case. Selecting a different tab updates the display to show apps in the corresponding category, filtered by the search input if provided. If the search input is empty, all apps in the active or selected category are displayed. The AppStore component is provided with tabsList, which includes tabItem objects to manage and display the categories and their apps effectively."
              ghLink="https://github.com/Prama1421/App-Store-CP-13"
              demoLink="https://appstore0l.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coinTossGame}
              title="Coin Toss Game"
              description="The app initially displays a heads image with counts for total, heads, and tails set to 0. When the 'Toss Coin' button is clicked, a result is generated using the expression: if the result is 0, it shows heads; otherwise, it shows tails. Depending on the result, the corresponding image is displayed, and the respective count (heads or tails) is incremented by one, along with the total count."
              ghLink="https://github.com/Prama1421/Coin-Toss-Game-CP-14"
              demoLink="https://cointossgame0.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReviewsApp}
              title="Reviews App"
              description="The app features navigation arrows to browse through reviews in the ReviewsCarousel component. Clicking the left arrow displays the previous review, while clicking the right arrow shows the next review. If the current review is the first in the list, clicking the left arrow has no effect. Similarly, if the current review is the last in the list, clicking the right arrow has no effect. The ReviewsCarousel component is provided with reviewsList, which contains the review objects to support this functionality."
              ghLink="https://github.com/Prama1421/Reviews-App-CP-15"
              demoLink="https://reviewsapp0.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commentsApp}
              title="Comments App"
              description="The app initially displays an empty comment list and input fields. When non-empty values are provided and the 'Add Comment' button is clicked, a new comment is added to the list, the comments count is incremented, and the input fields are reset. Clicking the 'Like' button toggles the image between 'Like' and 'Liked.' Clicking the 'Delete' button removes the comment from the list and decrements the comments count."
              ghLink="https://github.com/Prama1421/Comments-App-CP-16"
              demoLink="https://commentapp0.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appointmentsapp}
              title="Appointments App"
              description="The app initially displays an empty list of appointments and empty input fields for title and date. When non-empty values are provided and the 'Add' button is clicked, a new appointment is added to the list, and the input fields are reset. Clicking the star on an appointment marks it as starred. The 'Starred' filter toggles to show either only starred appointments or all appointments, updating the display accordingly."
              ghLink="https://github.com/Prama1421/Appointments-App-CP-16"
              demoLink="https://appointmentappi.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moneyManagerApp}
              title="Money Manager"
              description="The app initially shows Balance Amount, Income Amount, and Expenses Amount as 0. Balance Amount is calculated by subtracting Expenses Amount from Income Amount. Income Amount and Expenses Amount are updated based on the transactions: income transactions increase the total income, and expense transactions increase the total expenses. The MoneyManager component is provided with transactionTypeOptions, with the first option selected by default. When a transaction is added using values from titleInput, amountInput, and optionId, the transaction is added to the history, and totals are updated. Clicking the delete button for a transaction removes it from the history and updates the totals. The input fields are reset after each transaction."
              ghLink="https://github.com/Prama1421/Money-Manager-CP-17"
              demoLink="https://moneymanagerl.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DigitalTimer}
              title="Digital Timer App"
              description="The app features a timer with a default limit of 25 minutes. Clicking 'Start' begins the countdown and changes the button to 'Pause,' disabling the Plus and Minus buttons. Users can adjust the timer limit with Plus and Minus buttons, which are disabled while the timer is running. Clicking 'Pause' stops the timer, while 'Reset' restores the initial limit and re-enables the adjustment buttons."
              ghLink="https://github.com/Prama1421/Digital-Timer-App-CP-19"
              demoLink="https://digitaltimer41.ccbp.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StopWatch}
              title="Stop Watch"
              description="The app features a stopwatch that starts running when the 'Start' button is clicked, stops when the 'Stop' button is pressed, and resets to zero when the 'Reset' button is clicked."
              ghLink="https://github.com/Prama1421/Stopwatch-CP-20"
              demoLink="https://stopwatchl.ccbp.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
