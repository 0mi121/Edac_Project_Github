package com.sunbeam.entities;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="role")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="roleid")
    private int id;

    @Column(name="name")
    private String name;

//    @ManyToMany(mappedBy = "user_role" /*, cascade = CascadeType.MERGE*/)
//	private List<Users> usersList;
}
