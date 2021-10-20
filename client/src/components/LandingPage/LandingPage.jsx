import React from 'react';

export default function LandingPage() {
  return (
    <>
      <div className="landingPage-container">
        <img src="./landingPage.jpg" alt="style" />
        <div className="title">
          MentorUP
        </div>
        <div className="subtitle">
          The easist way to learn anything you are intrested, and share your talented and passion.
          Find the mentor from all over the world, flex timeline, flex structure,
          learn in the way you always imagine.
        </div>
        <button type="button" className="imStudent">I&apos;m a student</button>
        <button type="button" className="imMentor">I&apos;m a mentor</button>
      </div>
    </>

  )
}