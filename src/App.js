import { Routes, Route} from 'react-router-dom';
import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';
import styled from 'styled-components';


function App() {

  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/done/:surveyId" element={<CompletionPage/>} />
          <Route path="/survey/:surveyId/" element={<SurveyPage/>}>
            <Route path=":step" element={<SurveyPage/>} />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`

const Box = styled.div`
  background-color: #fff;
  width: 700px;
  min-height: 500px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`

export default App;
