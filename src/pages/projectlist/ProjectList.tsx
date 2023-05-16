import { useState, useCallback } from 'react';
import styled from 'styled-components';
import ProjectItemList from './components/ProjectItemList';
// import JobItemList from './components/JobItemList';

const ProjectList = () => {



  return (
        <MainContainer>
            <ProjectItemList  />
        </MainContainer>
  );
};



const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ProjectList;
