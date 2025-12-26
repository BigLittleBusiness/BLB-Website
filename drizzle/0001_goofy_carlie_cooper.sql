CREATE TABLE `demo_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`organisation` varchar(255),
	`product` enum('GrantMaestro','Wellness App','GrantThrive','Multiple Products'),
	`message` text,
	`status` enum('new','contacted','converted','closed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `demo_submissions_id` PRIMARY KEY(`id`)
);
