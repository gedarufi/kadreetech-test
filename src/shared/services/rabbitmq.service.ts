import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { connect, Connection, Channel, ConsumeMessage } from 'amqplib';

@Injectable()
export class RabbitMQService {
  private connection: Connection;
  private channel: Channel;

  constructor(private readonly configService: ConfigService) {}

  async connect() {
    try {
      this.connection = await connect(this.configService.get('rabbitmq').url);
      this.channel = await this.connection.createChannel();
      console.log('Successfully connected to RabbitMQ');
    } catch (error) {
      console.error('Error connecting to RabbitMQ:', error);
      throw error;
    }
  }

  async publishMessage(queue: string, message: any) {
    try {
      if (!this.channel) {
        await this.connect();
      }

      await this.channel.assertQueue(queue, { durable: true });
      return this.channel.sendToQueue(
        queue,
        Buffer.from(JSON.stringify(message)),
      );
    } catch (error) {
      console.error('Error publishing message:', error);
      throw error;
    }
  }

  async consumeMessages(
    queue: string,
    callback: (message: ConsumeMessage | null) => void,
  ) {
    try {
      if (!this.channel) {
        await this.connect();
      }

      await this.channel.assertQueue(queue, { durable: true });
      await this.channel.consume(queue, callback);
    } catch (error) {
      console.error('Error consuming messages:', error);
      throw error;
    }
  }

  async closeConnection() {
    try {
      await this.channel?.close();
      await this.connection?.close();
    } catch (error) {
      console.error('Error closing RabbitMQ connection:', error);
      throw error;
    }
  }
}
