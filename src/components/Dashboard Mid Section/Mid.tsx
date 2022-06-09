import React from "react";
import {
  SkillTest,
  SkillTestDetails,
  StyledPaper,
  UpdateButton,
  Details,
  StatisticsSection,
  Content,
  StatsRow,
  StatsItem,
  StatsInfo,
  ImageContainer,
  ComparisonGraph,
  Graph,
} from "./styles";
import { Dialog, Typography } from "@mui/material";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
} from "victory";
import MuiDialog from "../MuiDialog";

const Mid = () => {
  return (
    <StyledPaper>
      <p>Skill Test</p>
      <SkillTest>
        <Details>
          <img src="html-logo.png" alt="HTML Logo" />
          <SkillTestDetails>
            <Typography color="#222F3E" variant="h5">
              HyperText Markup Language
            </Typography>
            <Typography color="#566474" variant="h6">
              Questions: 08 | Duration: 15mins | Submitted on 5 June 2021
            </Typography>
          </SkillTestDetails>
        </Details>

        <MuiDialog />
      </SkillTest>
      <StatisticsSection>
        <Content>
          <Typography
            color="#1E272E"
            variant="h5"
            marginTop="20px"
            marginBottom="20px"
          >
            Quick Statistics
          </Typography>
          <StatsRow>
            <StatsItem>
              <ImageContainer>
                <img src="rank.png" alt="Rank image" />
              </ImageContainer>
              <StatsInfo>
                <Typography fontWeight="700" fontSize="1.8rem" color="#1E272E">
                  12,890
                </Typography>
                <Typography fontSize="1rem" color="#9EAAB7">
                  YOUR RANK
                </Typography>
              </StatsInfo>
            </StatsItem>
            <StatsItem>
              <ImageContainer>
                <img src="percentile.png" alt="percentile image" />
              </ImageContainer>
              <StatsInfo>
                <Typography fontWeight="700" fontSize="1.8rem" color="#1E272E">
                  37%
                </Typography>
                <Typography fontSize="1rem" color="#9EAAB7">
                  PERCENTILE
                </Typography>
              </StatsInfo>
            </StatsItem>
            <StatsItem>
              <ImageContainer>
                <img src="checkMark.png" alt="score image" />
              </ImageContainer>
              <StatsInfo>
                <Typography fontWeight="700" fontSize="1.8rem" color="#1E272E">
                  07/15
                </Typography>
                <Typography fontSize="1rem" color="#9EAAB7">
                  CORRECT ANSWERS
                </Typography>
              </StatsInfo>
            </StatsItem>
          </StatsRow>
        </Content>
      </StatisticsSection>
      <ComparisonGraph>
        <Typography
          fontSize="25px"
          color="#1E272E"
          marginTop="20px"
          marginBottom="20px"
        >
          Comparison Graph
        </Typography>
        <Typography
          width="65%"
          variant="h6"
          color="#566474"
          marginBottom="20px"
        >
          You scored 37% percentile which is lower than the average percentile
          72% of all the engineers who took this assessment
        </Typography>
        <Graph>
          <VictoryChart>
            <VictoryLine
              interpolation="natural"
              data={[
                { x: 5, y: 100 },
                { x: 33, y: 315 },
                { x: 55, y: 500 }, // this will change
                { x: 65, y: 254 },
                { x: 84, y: 454 },
                { x: 96, y: 50 },
              ]}
            />
            <VictoryAxis dependentAxis crossAxis domain={[0, 1000]} />
            <VictoryAxis
              crossAxis
              // width={400}
              // height={400}
              domain={[0, 100]}
              // theme={VictoryTheme.material}
              // offsetY={200}
              // standalone={false}
              tickFormat={(t) => `${Math.round(t)}%`}
            />
            <VictoryScatter
              style={{ data: { fill: "#c43a31" } }}
              size={9}
              labels={() => null}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          target: "data",
                          mutation: (props) => {
                            const fill = props.style && props.style.fill;
                            return fill === "black"
                              ? null
                              : { style: { fill: "black" } };
                          },
                        },
                        {
                          target: "labels",
                          mutation: (props) => {
                            return props.text === "clicked"
                              ? null
                              : { text: "clicked" };
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
              data={[{ x: 55, y: 500 }]}
            />
          </VictoryChart>
        </Graph>
      </ComparisonGraph>
    </StyledPaper>
  );
};

export default Mid;
