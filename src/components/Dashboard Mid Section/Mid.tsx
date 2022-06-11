import React, { useContext, useState } from "react";
import {
  SkillTest,
  SkillTestDetails,
  StyledPaper,
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
import { Typography } from "@mui/material";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
} from "victory";
import MuiDialog from "../MuiDialog";
import UserContext from "../UserContext";

const INIT_VALUES = {
  score: "07",
  rank: "12",
  percentile: "37",
};

export type ValueType = {
  rank: string;
  percentile: string;
  score: string;
};

const Mid = () => {
  const { val, handleChangeVals } = useContext(UserContext);

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
              Questions: 08 | Duration: 15mins | Submitted on 10 June 2021
            </Typography>
          </SkillTestDetails>
        </Details>

        <MuiDialog handleChangeVals={handleChangeVals} />
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
                  {val.rank}
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
                  {val.percentile}%
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
                  {val.score}/15
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
          You scored {val.percentile}% percentile which is{" "}
          {Number(val.percentile) > 72 ? "higher" : "lower"} than the average
          percentile 72% of all the engineers who took this assessment
        </Typography>
        <Graph>
          <VictoryChart>
            <VictoryLine
              interpolation="natural"
              data={[
                { x: 5, y: 100 },
                { x: 33, y: 315 },
                { x: Number(val.percentile), y: 500 }, // this will change
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
                    onMouseOver: () => {
                      return [
                        {
                          target: "data",
                          mutation: (props) => {
                            const fill = props.style && props.style.fill;
                            return fill === "blue"
                              ? null
                              : { style: { fill: "blue" } };
                          },
                        },
                        {
                          target: "labels",
                          mutation: (props) => {
                            return props.text === "hovered"
                              ? null
                              : { text: "hovered" };
                          },
                        },
                      ];
                    },
                  },
                },
                {
                  target: "data",
                  eventHandlers: {
                    onMouseOut: () => {
                      return [
                        {
                          target: "data",
                          mutation: (props) => {
                            const fill = props.style && props.style.fill;
                            return fill === "blue"
                              ? null
                              : { style: { fill: "blue" } };
                          },
                        },
                        {
                          target: "labels",
                          mutation: (props) => {
                            return props.text === "hovered"
                              ? null
                              : { text: "hovered" };
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
              data={[{ x: Number(val.percentile), y: 500 }]}
            />
          </VictoryChart>
        </Graph>
      </ComparisonGraph>
    </StyledPaper>
  );
};

export default Mid;
