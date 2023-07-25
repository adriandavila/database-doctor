"use client";

import React, { useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  HStack,
  Input,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  FormControl,
  ModalBody,
  ModalFooter,
  useCheckbox,
  CheckboxGroup,
  Checkbox,
  useCheckboxGroup,
  Text,
} from "@chakra-ui/react";

import Select from "react-select";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Roles({
  roles,
  permissions,
}: {
  roles: Array<{
    __typename?: "Role";
    name: string;
    rid: number;
    permissions: Array<{
      __typename?: "Permission";
      name: string;
      pid: number;
    }>;
  }>;
  permissions: {
    __typename?: "PermissionDetail" | undefined;
    name: string;
    pid: number;
  }[];
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [roleName, setRoleName] = useState("");
  const [rolePermissions, setRolePermissions] =
    useState<{ label: string; value: Number }[]>();

  const opts = permissions.map((p) => {
    return { value: p.pid, label: p.name };
  });

  async function onSubmitRole(role: any) {
    console.log(roleName);
    console.log(rolePermissions);
  }

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <div>
          <InputGroup borderRadius={"full"}>
            <InputLeftElement pointerEvents="none">
              <Icon as={SearchIcon} />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search..."
              outline={"1px solid"}
              outlineColor={"pink.800"}
              _focus={{ outlineColor: "pink.500", borderColor: "pink.500" }}
            />
          </InputGroup>
        </div>
        <Button
          color={"pink.400"}
          outline={"2px solid"}
          outlineColor={"pink.400"}
          marginRight={6}
          onClick={onOpen}
        >
          <Icon as={AddIcon} marginRight={2} />
          Create New Role
        </Button>
      </Flex>
      <br />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Role ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Permissions</Th>
              <Th justifyContent={"right"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {roles.map((role) => (
              <Tr key={role.rid}>
                <Td>{role.rid || ""}</Td>
                <Td>{role.name || ""}</Td>
                <Td>no descrption</Td>
                <Td>
                  <HStack spacing={4}>
                    <Tag>TODO</Tag>
                  </HStack>
                </Td>
                <Td>
                  <Flex justifyContent={"right"}>
                    <Popover placement={"bottom-end"}>
                      <PopoverTrigger>
                        <Icon as={MoreVertIcon} cursor={"pointer"} />
                      </PopoverTrigger>
                      <PopoverContent maxWidth={200}>
                        <PopoverArrow />
                        <PopoverBody>
                          <Stack>
                            <Button>
                              <Icon
                                as={EditIcon}
                                cursor={"pointer"}
                                marginRight={2}
                              />
                              Edit Role
                            </Button>
                            <Button>
                              <Icon
                                as={PersonRemoveIcon}
                                cursor={"pointer"}
                                marginRight={2}
                              />
                              Remove Role
                            </Button>
                          </Stack>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create/Modify Role</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="Role Name">
                <Input
                  placeholder="Role Name"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => setRoleName(e.target.value)}
                />
              </FormControl>
              <FormControl id="Permissions">
                <Text fontWeight={700}>Select Permissions:</Text>
                <Select
                  defaultValue={[]}
                  isMulti
                  name="colors"
                  // @ts-ignore
                  options={opts}
                  styles={{
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                  }}
                  // @ts-ignore
                  onChange={(newValue) => setRolePermissions(newValue)}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            {/* onClick={onSubmitNewProject} */}
            <Button colorScheme="pink" mr={3} onClick={onSubmitRole}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Roles;