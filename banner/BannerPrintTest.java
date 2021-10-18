package com.cs.test;

import java.io.*;

/**
 * @author cs
 * @des
 * @date 2021/10/18
 */
public class BannerPrintTest {
    public void test() throws IOException {
        //在一个java项目里面，getResource可以直接获取到当前项目到根路径
        String path = getClass().getClassLoader().getResource("./banner.txt").getPath();
        System.out.println(path);
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(path)));
        String line = null;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
    }
    public static void main(String[] args) throws IOException {
        BannerPrintTest bannerPrintTest = new BannerPrintTest();
        bannerPrintTest.test();
    }

}
