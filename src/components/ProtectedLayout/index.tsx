import React from "react";
import { Card, Layout } from "antd";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const { Content } = Layout;
  if (!auth.email) {
    return (
      <Layout>
        <Content>
          <Card title="Error!">
            <p>You don't have access</p>
          </Card>
        </Content>
      </Layout>
    );
  }
  return children;
};
