package com.greenwich.tutorvn.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Notification {
    private Long id;
    private Long receivedID;
    private Long senderID;
    private String title;
    private String content;
    private int priority;
    private  int type;
    private Date createdDate;
}
