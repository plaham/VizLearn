// QuizScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const quizData = [
  // ... (same quiz questions as before)
  // Additional Questions
  {
    question: 'What is the symbol for the chemical element iron?',
    options: ['Fe', 'Ir', 'In', 'I'],
    correctAnswer: 'Fe',
  },
  {
    question: 'Which animal is known as the "king of the jungle"?',
    options: ['Elephant', 'Lion', 'Gorilla', 'Tiger'],
    correctAnswer: 'Lion',
  },
  {
    question: 'Who is the best professor?',
    options: ['Dr. Usama Mir', 'Dr. Usama Mir', 'Dr. Usama Mir', 'Dr. Usama Mir'],
    correctAnswer: 'Brazil',
  },
  {
    question: 'What is the largest organ in the human body?',
    options: ['Liver', 'Brain', 'Heart', 'Skin'],
    correctAnswer: 'Skin',
  },
  {
    question: 'Which scientist formulated the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Marie Curie'],
    correctAnswer: 'Albert Einstein',
  },
];

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes (120 seconds) timer

  // Function to handle the quiz timer
  useEffect(() => {
    let interval;
    if (!showResult && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // Decrease timeLeft by 1 second every second
    } else {
      clearInterval(interval);
    }

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [showResult, timeLeft]);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (!currentQuestion) {
      return; // Prevent handling answer when currentQuestion is undefined
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex === quizData.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(120); // Reset timer to 2 minutes on restart
  };

  const renderQuestion = () => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (!currentQuestion) {
      return null; // Return null if currentQuestion is undefined
    }

    return (
      <View style={styles.quizContainer}>
        <Text style={styles.question}>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswer(option)}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        <Text style={styles.timer}>Time Left: {timeLeft} seconds</Text>
      </View>
    );
  };

  const renderResult = () => {
    let feedback;
    if (score === quizData.length) {
      feedback = 'Congratulations! You scored perfectly!';
    } else if (score >= quizData.length / 2) {
      feedback = 'Great job! You did well!';
    } else {
      feedback = 'Keep practicing. You can do better!';
    }

    return (
      <View style={styles.quizContainer}>
        <Text style={styles.resultText}>Quiz Complete!</Text>
        <Text style={styles.scoreText}>Your Score: {score}/{quizData.length}</Text>
        <Text style={styles.feedbackText}>{feedback}</Text>
        <TouchableOpacity onPress={handleRestartQuiz} style={styles.restartButton}>
          <Text style={styles.restartButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {showResult ? renderResult() : renderQuestion()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
  timer: {
    fontSize: 16,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 10,
  },
  feedbackText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  restartButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default QuizScreen;
