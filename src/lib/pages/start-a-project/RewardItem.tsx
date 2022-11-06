import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";

const RewardItem = () => {
  return (
    <div className="item">
      <Box
        sx={{
          border: " 1px solid #777E91",
          borderRadius: "16px",
          padding: "16px 24px",
        }}
        color="#B1B5C4"
      >
        <Text
          fontSize="32px"
          marginBottom="3"
          as="div"
          className="flex justify-between"
        >
          <span>Reward Tiers</span>
          <span>$30</span>
        </Text>
        <Box className="flex my-4">
          <Box className="w-1/2">
            <Text marginBottom="3" as="div">
              Details
            </Text>
            <Text marginBottom="3" as="div">
              {`Get the full 6-CD Set of the story of the Alleyman, and the
              accompanying book of the show's scripts, behind the scenes
              information, and a set of 7 all-new Alleyman cards, illustrated by
              fantastic artists.`}
            </Text>
          </Box>
          <Box className="w-1/2">
            <Text marginBottom="3" as="div">
              Estimated Delievery
            </Text>
            <Text marginBottom="3" as="div">
              <List>
                <ListItem>Feb / 14 / 2023</ListItem>
              </List>
            </Text>
            <Text marginBottom="3" as="div" color="#B1B5C4">
              Includes
            </Text>
            <Text marginBottom="3" as="div" color="#B1B5C4">
              <List>
                <ListItem>1-CD Box Set of the Alleyman Podcast</ListItem>
              </List>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="flex my-4">
        <Button
          height="48px"
          borderRadius="24px"
          background="none"
          border="2px"
          borderColor="#777e91"
          className="back-btn"
          _hover={{ background: "none" }}
        >
          Edit
        </Button>
        <Button
          height="48px"
          borderRadius="24px"
          background="none"
          border="2px"
          borderColor="#777e91"
          className="back-btn"
          _hover={{ background: "none" }}
        >
          Delete
        </Button>
      </Box>
    </div>
  );
};
export default RewardItem;
