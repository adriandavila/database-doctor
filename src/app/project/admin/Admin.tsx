"use client";
import React from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Users from "@/components/project/admin/Users";
import Permissions from "@/components/project/admin/Permissions";

import {
  GetProjectDetailsQuery,
  GetPermissionsQuery,
} from "@/graphql/__generated__/graphql";

function Admin({
  projectDetails,
  permissions,
}: {
  projectDetails: GetProjectDetailsQuery;
  permissions: GetPermissionsQuery;
}) {
  return (
    <Tabs>
      <TabList>
        <Tab>Users</Tab>
        <Tab>Roles</Tab>
        <Tab>Permissions</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Users users={projectDetails.project?.users || []} />
        </TabPanel>
        <TabPanel>
          <p>roles!</p>
        </TabPanel>
        <TabPanel>
          <Permissions permissions={permissions.allPermissions || []} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Admin;