import React from "react";
import Box from "react-bulma-components/lib/components/box";
import Content from "react-bulma-components/lib/components/content";
import Button from "react-bulma-components/lib/components/button";
import Columns from "react-bulma-components/lib/components/columns";

const Ninja = ({ ninja, deleteNinja }) => {
  const { name, age, belt, id } = ninja;

  return (
    <Box>
      <div className="ninja">
        <Columns>
          <Columns.Column>
            <Content>
              <p>
                <strong>{name}</strong>
                <br />
                <span>Age: {age}</span>
                <br />
                <span>Belt: {belt}</span>
              </p>
            </Content>
          </Columns.Column>
          <Columns.Column narrow>
            <Button onClick={() => deleteNinja(id)}>
              <span role="img" aria-label="delete">
                🧺
              </span>
            </Button>
          </Columns.Column>
        </Columns>
      </div>
    </Box>
  );
};

export default Ninja;
