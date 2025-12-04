import { useQuery } from "@tanstack/react-query";
import testServices from "../services/test.services";

export const useGetTest = () => {
  return useQuery({
    queryKey: ["getTest"],
    queryFn: async () => {
      const response = await testServices.getTest();
      return response.data;
    },
  });
};

export const useGetCourseYear = () => {
  return useQuery({
    queryKey: ["getCourseYear"],
    queryFn: async () => {
      const response = await testServices.getCourseYear();
      
      return response
    },
  });
};

export const useGetTableCourse = () => {
  return useQuery({
    queryKey: ["getTableCourse"],
    queryFn: async () => {
      const response = await testServices.getTableCourse();
      return response.data;
    },
  });
};
